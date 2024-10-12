const router=require("express").Router();
const PaymentController=require("../controller/paymentController");
const { authenticate, IsUser } = require("../middleware/authenticate ");


router.post("/addpayment",authenticate, IsUser, PaymentController.CreatePayment);
router.get("/", authenticate, IsUser, PaymentController.FindAllPayment);
router.get("/:id",authenticate, IsUser, PaymentController.FindByIdPayment);
router.delete("/:id", authenticate, IsUser,PaymentController.DeletePayment);
router.patch("/:id", authenticate, IsUser, PaymentController.UpdatePayment);
router.post("/:id/pay",authenticate, IsUser, PaymentController.PaymentStatus);


module.exports=router;