import Admin from "../models/AdminModel.js";
import Bengkel from "../models/BengkelModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// AMBIL DB ADMIN
// export const getAdmin = async (req, res) => {
//   try {
//     const admin = await Admin.findAll({
//       attributes: ["id", "username", "email"],
//     });
//     res.json(admin);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.findAll({
      attributes: ["id", "email_bengkel"],
    });
    res.json(admin);
  } catch (error) {
    console.log(error);
  }
};

export const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(admin);
  } catch (error) {
    res.status(404).json({ msg: "Admin not found" });
  }
};

// export const getAdmin = async (req, res) => {
//   try {
//     const admin = await Admin.findByPk(req.userId, {
//       attributes: ["id", "email_bengkel"],
//     });
//     if (!admin) return res.sendStatus(404);
//     res.json(admin);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "Error retrieving user data" });
//   }
// };

// REGISTER
// export const Register = async (req, res) => {
//   const { username, email, password, confPassword } = req.body;
//   if (password !== confPassword)
//     return res
//       .status(400)
//       .json({ msg: "Password dan Confirm Password Tidak Sesuai" });

//   const salt = await bcrypt.genSalt();
//   const hashPassword = await bcrypt.hash(password, salt);

//   try {
//     await Admin.create({
//       username: username,
//       email: email,
//       password: hashPassword,
//     });
//     res.json({ msg: "Registrasi Berhasil!!" });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const Register = async (req, res) => {
  const { email_bengkel, password_bengkel, confPassword_bengkel } = req.body;
  if (password_bengkel !== confPassword_bengkel)
    return res
      .status(400)
      .json({ msg: "Password dan Confirm Password Tidak Sesuai" });

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password_bengkel, salt);

  try {
    await Admin.create({
      email_bengkel: email_bengkel,
      password_bengkel: hashPassword,
    });
    res.json({ msg: "Registrasi Berhasil!!" });
  } catch (error) {
    console.log(error);
  }
};

// LOGIN
// export const Login = async (req, res) => {
//   try {
//     const adm = await Admin.findAll({
//       where: {
//         email: req.body.email,
//       },
//     });
//     // deteksi password
//     const matchPass = await bcrypt.compare(req.body.password, adm[0].password);
//     if (!matchPass)
//       return res.status(404).json({ msg: "Password Yang Dimasukan Salah!!" });
//     const admId = adm[0].id;
//     const username = adm[0].username;
//     const email = adm[0].email;

//     // ACCESS TOKEN
//     const accessToken = jwt.sign(
//       { admId, username, email },
//       process.env.ACCESS_TOKEN_SECRET,
//       {
//         expiresIn: "20s",
//       }
//     );
//     // REFRESH TOKEN
//     const refreshToken = jwt.sign(
//       { admId, username, email },
//       process.env.REFRESH_TOKEN_SECRET,
//       {
//         expiresIn: "1d",
//       }
//     );
//     await Admin.update(
//       { refresh_token: refreshToken },
//       {
//         where: {
//           id: admId,
//         },
//       }
//     );
//     // COOKIE
//     res.cookie("refreshToken", refreshToken, {
//       httpOnly: true,
//       maxAge: 24 * 60 * 60 * 1000,
//       // secure: true
//     });
//     res.json({ accessToken });
//   } catch (error) {
//     res.status(404).json({ msg: "Email Tidak Ditemukan" });
//   }
// };

export const Login = async (req, res) => {
  try {
    const adm = await Admin.findAll({
      where: {
        email_bengkel: req.body.email_bengkel,
      },
    });
    // deteksi password
    const matchPass = await bcrypt.compare(
      req.body.password_bengkel,
      adm[0].password_bengkel
    );
    if (!matchPass)
      return res.status(404).json({ msg: "Password Yang Dimasukan Salah!!" });
    const admId = adm[0].id;
    const email_bengkel = adm[0].email_bengkel;

    // ACCESS TOKEN
    const accessToken = jwt.sign(
      { admId, email_bengkel },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    // REFRESH TOKEN
    const refreshToken = jwt.sign(
      { admId, email_bengkel },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await Admin.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: admId,
        },
      }
    );
    // COOKIE
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      // secure: true, // true if HTTPS
      // sameSite: "None", // required for cross-site cookies
      maxAge: 24 * 60 * 60 * 1000,
      // secure: true
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email Tidak Ditemukan" });
  }
};

// LOGOUT
export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const adm = await Admin.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!adm[0]) return res.sendStatus(204);
  const adminId = adm[0].id;
  await Admin.update(
    { refreshToken: null },
    {
      where: {
        id: adminId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
