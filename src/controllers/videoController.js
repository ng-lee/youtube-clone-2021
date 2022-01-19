const fakeUser = {
  username: "Nico",
  loggedIn: true,
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser: fakeUser });
export const search = (req, res) => res.send("Search video");
export const upload = (req, res) => res.send("Upload video");
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const remove = (req, res) => res.send("Remove video");
