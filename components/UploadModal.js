import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";

export default function () {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>Upload Modal</h1>
      {open && <h1>Modal is open</h1>}
    </div>
  );
}
