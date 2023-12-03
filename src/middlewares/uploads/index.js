import multer from "multer";

export const avatarUpload = multer({
  dest: "uploads/avatars/",
  limits: {
    fileSize: 500000,
  },
});

export const productUpload = multer({
  dest: "uploads/products/",
  limits: {
    fileSize: 10000000,
  },
});
