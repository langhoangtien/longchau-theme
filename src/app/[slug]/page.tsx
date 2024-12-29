import { HOST_API } from "@/config-global";
import { notFound } from "next/navigation";
export const revalidate = 100;
export default async function AboutPage(props: { params: { slug: string } }) {
  const slug = props?.params?.slug;
  if (!slug) return notFound();
  const dataJson = await fetch(`${HOST_API}/pages/${slug}`);
  if (!dataJson.ok) return notFound();
  const data = await dataJson.json();
  return (
    <div className="lc-view-full-cont pt-16 content-html ">
      {" "}
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );
}
