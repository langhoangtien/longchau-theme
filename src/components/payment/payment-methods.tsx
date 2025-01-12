import Image from "next/image";
import { Checkbox } from "../ui/checkbox";

export default function PaymentMethods({ payment, payments, setPayment }: any) {
  return (
    <div className="mt-4 md:mt-7" id="cart.paymentMethodsSection.root">
      <div className="text-base  font-medium px-4 md:px-0 mb-2 md:mb-3 md:flex md:justify-between">
        <div>Chọn phương thức thanh toán</div>
      </div>
      <div className="md:rounded-xl overflow-hidden">
        <div className="divide-y">
          {payments.map((item: any) => (
            <div
              key={item.method}
              className={`flex items-center gap-2 py-3 px-4 bg-white ${
                item.disabled ? "hidden" : ""
              }`}
            >
              <Checkbox
                checked={payment === item.method}
                disabled={item.disabled}
                onCheckedChange={() => setPayment(item.method)}
                id={item.method}
              />
              <label
                htmlFor={item.method}
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="mr-3 w-10 h-10">
                    <Image
                      alt={item.label}
                      width={48}
                      height={48}
                      data-nimg={1}
                      className="object-contain rounded-lg"
                      src={item.image}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <p className="flex-1 text-text-primary text-label2 rounded-sm">
                    {item.label}
                  </p>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
