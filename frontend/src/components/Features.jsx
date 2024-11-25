import Title from "./Title";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LiaUndoAltSolid } from "react-icons/lia";

const Features = () => {
  return (
    <section className="max-padd-container py-16">
      {/* title */}
      <Title title={"Our Features"} titleStyles={"text-center"} />
      {/* container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 bg-white rounded-xl">
        <div className="p-4 rounded-3xl">
          <TbTruckDelivery className="bold-32 mb-3 text-secondary" />
          <h4 className="h4 capitalize">Fast Delivery</h4>
          <p>
            At ShirtThreads, we prioritize your convenience. With real-time
            tracking and swift dispatch times, you’ll never have to wait long to
            get your favorite styles.
          </p>
        </div>
        <div className="p-4 rounded-3xl">
          <LiaUndoAltSolid className="bold-32 mb-3 text-yellow-500" />
          <h4 className="h4 capitalize">Easy Return</h4>
          <p>
            Enjoy hassle-free shopping with our Easy Return policy, ensuring
            quick and seamless returns for your ultimate convenience and
            satisfaction.
          </p>
        </div>
        <div className="p-4 rounded-3xl">
          <RiSecurePaymentLine className="bold-32 mb-3 text-teal-500" />
          <h4 className="h4 capitalize">Secure Payment System</h4>
          <p>
            Shop with confidence using our Secure Payment system, safeguarding
            your transactions with advanced encryption and trusted payment
            gateways.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
