import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: ["user_id", "nama_user", "no_tlp", "email"],
    });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Register
export const UserRegister = async (req, res) => {
  const { nama_user, no_tlp, email, password, confPassword } = req.body;
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password dan Confirm Password Tidak Sesuai" });

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    await User.create({
      nama_user: nama_user,
      no_tlp: no_tlp,
      email: email,
      password: hashPassword,
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

export const UserLogin = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Log the request body
    const user = await User.findAll({
      where: {
        email: req.body.email,
      },
    });
    // deteksi password
    const matchPass = await bcrypt.compare(req.body.password, user[0].password);
    if (!matchPass)
      return res.status(404).json({ msg: "Password Yang Dimasukan Salah!!" });
    const userId = user[0].user_id;
    const email = user[0].email;

    // ACCESS TOKEN
    const accessToken = jwt.sign(
      { userId, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );
    // REFRESH TOKEN
    const refreshToken = jwt.sign(
      { userId, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await User.update(
      { refresh_token: refreshToken },
      {
        where: {
          user_id: userId,
        },
      }
    );
    // COOKIE
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      // secure: true
    });
    res.json({ accessToken , msg: "Login successful"});
  } catch (error) {
    res.status(404).json({ msg: "Email Tidak Ditemukan" });
  }
};

// LOGOUT
export const UserLogout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await User.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await User.update(
    { refreshToken: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
