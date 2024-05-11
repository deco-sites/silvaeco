interface Props {
  /**
  * @description The description of name.
  */
  mainText: string;
}

export default function Section({ mainText = "Capy" }: Props) {
  return <div>
    <h2 class="text-4xl text-primary font-bold mt-20 text-center">
      {mainText}
    </h2>
  </div>
}