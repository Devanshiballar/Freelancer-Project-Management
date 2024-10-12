const router = require("express").Router();
const ProjectController = require("../controller/projectController");
const { authenticate, IsUser } = require("../middleware/authenticate ");
const upload = require("../utils/csv.upload");

router.post(
  "/addproject",
  authenticate,
  IsUser,
  ProjectController.CreateProject
);
router.get("/", authenticate, IsUser, ProjectController.FindAllProject);
router.get("/:id", authenticate, IsUser, ProjectController.FindById);
router.delete("/:id", authenticate, IsUser, ProjectController.DeleteProject);
router.patch("/:id", authenticate, IsUser, ProjectController.UpdateProject);
router.get("/export", authenticate, IsUser, ProjectController.BulkUpload);
router.post(
  "/import",
  authenticate,
  IsUser,
  upload.single("file"),
  ProjectController.ImportCsv
);

module.exports = router;
