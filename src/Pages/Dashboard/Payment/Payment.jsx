import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51OIDyHDbmhpZKeGXhCrJC3OqQSCCvP9CvMkuPAGX12lL0eorhqCyZe0q62HmQwFYph49rKiJv0aAcX35jIIxgKSO00bx8bLNdK');

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"Please pay to eat"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;