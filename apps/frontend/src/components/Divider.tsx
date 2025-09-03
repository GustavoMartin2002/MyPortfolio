export default function Divider(props: {title: string}) {
  return (
    <section 
      className="divider divider-start text-3xl font-bold text-shadow-lg my-10 mx-[10%]
      max-lg:text-2xl max-md:text-xl max-sm:text-lg max-sm:mx-[5%]"
    >
      {props.title}
    </section>
  );
}