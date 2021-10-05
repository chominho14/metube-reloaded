export const trending = (req, res) => res.send("Home Page Vidies");

export const see = (req, res ) => {
    console.log(res.params);
    return res.send(`See Videos : #${req.params.id}`);
};
export const edit = (req, res) => res.send("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req,res) => res.send("Delete Videos");

