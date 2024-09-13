import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FOOTER_MENU, FOOTER_SWITCHBOARD_MENU } from ".";
import Link from "next/link";

export function AccordionMenu() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FOOTER_MENU.map((menu, index) => (
        <AccordionItem
          key={menu.title}
          className="border-b py-3"
          value={menu.title}
        >
          <AccordionTrigger className="font-semibold text-gray-600/80">
            {menu.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col mt-1 gap-2">
              <ul className="gap-2 flex flex-col">
                {menu.items.map((item) => (
                  <Link
                    key={item.link}
                    className="inline-block py-[2px] text-gray-600/80"
                    href={`/${item.link}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function AccordionswitchboardMenu() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem className="border-b py-3" value="switchboard">
        <AccordionTrigger className="font-semibold text-gray-600/80">
          TỔNG ĐÀI
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col mt-1 gap-2">
            <ul className="gap-2 flex flex-col">
              {FOOTER_SWITCHBOARD_MENU.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center gap-1 md:flex-col md:mb-2 last:md:mb-0"
                >
                  <p className="text-gray-600/80">{item.name}</p>
                  <a className="inline-block" href="tel:18006928">
                    <span className="text-primary font-medium">
                      {item.phone}
                      <span className="font-normal"> {item.branch}</span>
                    </span>
                  </a>
                </div>
              ))}
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
