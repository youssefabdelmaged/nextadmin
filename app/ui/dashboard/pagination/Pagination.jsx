"use client";

import styles from "./pagination.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const page = searchParams.get("page") || 1;
  
  const itemperpage = 2;
  
  const prev = itemperpage * (parseInt(page) - 1) > 0;
  const next = itemperpage * (parseInt(page) - 1) + itemperpage < count;
  
  const handleChangePage = (type) => {
    type === "prev"
    ? params.set("page", parseInt(page) - 1)
    : params.set("page", parseInt(page) + 1 );
    replace(`${pathname}?${params}`)
  };
  return (
    <div className={styles.container}>

      <button
        className={styles.button}
        disabled={!prev}
        onClick={() => handleChangePage("prev")}
      >
        <IoIosArrowBack />
        Previous
      </button>

      <button
        className={styles.button}
        disabled={!next}
        onClick={() => handleChangePage("next")}
      >
        Next
        <IoIosArrowForward />
      </button>
      
    </div>
  );
};

export default Pagination;
