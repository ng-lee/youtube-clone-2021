import multer from "multer";

export const localMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user | {};
  next();
};

export const loginOnlyMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/login");
  }
};

export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};

export const avatarUploadMiddleware = multer({
  dest: "uploads/avatars/",
  limits: {
    fileSize: 3000000,
  },
});

export const videoUploadMiddleware = multer({
  dest: "uploads/videos/",
  limits: {
    fileSize: 10000000,
  },
});
