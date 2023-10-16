export default function ProjectCard(props) {
  return (
    <div class="rounded-lg dark:text-white text-black w-[300px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div>
        <img
          class="rounded-t-lg h-[300px] "
          src={props.imglink}
          alt=""
        />
      </div>
      <div class="p-6">
        <h5 class="mb-2 text-xl font-medium leading-tight">{props.title}</h5>
        <p class="mb-4 text-base">
          {props.desc}
        </p>
        <button
          type="button"
          class="rounded bg-[#FC4A1A] px-6 py-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#F7B733] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
        >
          Button
        </button>
      </div>
    </div>
  );
}
