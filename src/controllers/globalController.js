import Bap from "../models/Bap";

export const homeController = async (req, res) => {
  try {
    const result = await Bap.find();
    res.render("screens/home", { dataLIST: result });
  } catch (e) {
    console.log(e);
    res.render("screens/home", { list: [] });
  }
};

export const createController = (req, res) => {
  res.render("screens/create");
};

export const postCreteController = async (req, res) => {
  const {
    body: { title, desc },
  } = req;

  try {
    const result = await Bap.create({
      title: title,
      contents: desc,
      created: "2021-05-05",
    });

    homeController(req, res);
  } catch (e) {
    console.log(e);
    homeController(req, res);
  }
};

export const detailController = async (req, res) => {
  const {
    query: { id },
  } = req;

  try {
    const result = await Bap.findOne({ _id: id });

    res.render("screens/detail", { data: result });
  } catch (e) {
    console.log(e);
    homeController(req, res);
  }
};

export const postdetailController = (req, res) => {
  try {
    const result = Bap.detail;
  } catch (e) {
    console.log(e);
    homeController(req, res);
  }
};
