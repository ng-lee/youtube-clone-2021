export const trending = (req, res) => {
  const videos = [
    {
      title: "Hello",
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Video #2",
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Whatsup",
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("Search video");
export const upload = (req, res) => res.send("Upload video");
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const remove = (req, res) => res.send("Remove video");
