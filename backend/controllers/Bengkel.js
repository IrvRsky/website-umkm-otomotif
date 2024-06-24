import Bengkel from "../models/BengkelModel.js";

export const addBengkel = async (req, res) => {
    try {
        const { nama_bengkel, no_tlp_bengkel, alamat, deskripsi, latitude, longtitude, gambar_bengkel } = req.body;

        // Validasi input
        if (latitude && isNaN(latitude)) {
            return res.status(400).json({ message: "Latitude harus berupa angka." });
        }
        if (longtitude && isNaN(longtitude)) {
            return res.status(400).json({ message: "Longtitude harus berupa angka." });
        }

        // Check if a Bengkel with the same id exists
        const existingBengkel = await Bengkel.findOne({ where: { id: req.userId } });

        if (existingBengkel) {
            // Update the existing Bengkel
            existingBengkel.nama_bengkel = nama_bengkel;
            existingBengkel.no_tlp_bengkel = no_tlp_bengkel;
            existingBengkel.alamat = alamat;
            existingBengkel.deskripsi = deskripsi;
            existingBengkel.latitude = parseFloat(latitude); // pastikan ini float
            existingBengkel.longtitude = parseFloat(longtitude); // pastikan ini float
            existingBengkel.gambar_bengkel = gambar_bengkel;

            await existingBengkel.save();
            res.status(200).json(existingBengkel);
        } else {
            // Create a new Bengkel
            const newBengkel = await Bengkel.create({
                id: req.userId, // menggunakan userId dari token
                nama_bengkel,
                no_tlp_bengkel,
                alamat,
                deskripsi,
                latitude: parseFloat(latitude), // pastikan ini float
                longtitude: parseFloat(longtitude), // pastikan ini float
                gambar_bengkel,
            });
            res.status(201).json(newBengkel);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ambil data harus login admin
export const getBengkel = async (req, res) => {
    // try {
    //     // const bengkel = await Bengkel.findAll({
    //     //     attributes: ["bengkel_id", "id", "nama_bengkel", "no_tlp_bengkel", "alamat", "deskripsi", "latitude", "longtitude", "gambar_bengkel"],
    //     // });
    //     const userId = req.userId; // Assuming verifyToken sets req.userId
    //     const bengkel = await Bengkel.findAll({ where: { id: userId } });
    //     res.json(bengkel);
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }

    // try {
    //     const userId = req.userId; // Assuming verifyToken sets req.userId
    //     console.log('User ID:', userId); // Log the user ID
    //     if (!userId) {
    //         return res.status(400).json({ message: "User ID is missing" });
    //     }
    //     const bengkel = await Bengkel.findAll({ where: { id: userId } });
    //     res.json(bengkel);
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }

    try {
        const userId = req.userId; // Assuming verifyToken sets req.userId
        console.log('User ID:', userId); // Log the user ID
        if (!userId) {
            return res.status(400).json({ message: "User ID is missing" });
        }
        const bengkel = await Bengkel.findOne({ where: { id: userId } }); // Return single record
        if (bengkel) {
            res.json(bengkel);
        } else {
            res.json(null); // Return null if no data found
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getBengkelById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Request params:', req.params); // Log params to debug
        const bengkel = await Bengkel.findOne({ where: { bengkel_id: id } });
        if (bengkel) {
            res.json(bengkel);
        } else {
            res.status(404).json({ message: "Bengkel not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getDataBengkel = async (req, res) => {
    try {
      const bengkel = await Bengkel.findAll({
        attributes: ["bengkel_id", "id", "nama_bengkel", "no_tlp_bengkel", "alamat", "deskripsi", "latitude", "longtitude", "gambar_bengkel"],
      });
      res.json(bengkel);
    } catch (error) {
      console.log(error);
    }
  };

