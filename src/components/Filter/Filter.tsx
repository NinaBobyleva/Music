'use client'
import { TrackType } from "@/types/tracks";
import styles from "./filter.module.css"
import classNames from "classnames";
import { getUniqueValues } from "@/utils/getUniqueValues";
import { FilterItem } from "./FilterItem/FilterItem";
import { useState } from "react";

const SORT_OPTIONS = ["По умолчанию", "Сначала новые", "Сначала старые"];

type FilterProps = {
  tracks: TrackType[]
}

export function Filter({tracks}: FilterProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilter = (filterName: string) => {
    setActiveFilter((prev) => (prev === filterName ? null : filterName));
  }

  const getUniqueAuthors = getUniqueValues(tracks, "author");
  
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterItem title={"исполнителю"} isActive={} list={getUniqueAuthors} handleFilter={handleFilter} />
      <div className={classNames(styles.filterButton, styles.btnText)}>исполнителю</div>
      <div className={classNames(styles.filterButton, styles.btnText)}>году выпуска</div>
      <div className={classNames(styles.filterButton, styles.btnText)}>жанру</div>
    </div>
  );
}
