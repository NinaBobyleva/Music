"use client";
import { TrackType } from "@/types/tracks";
import styles from "./filter.module.css";
import { getUniqueValues } from "@/utils/getUniqueValues";
import { FilterItem } from "./FilterItem/FilterItem";
import { useState } from "react";

const SORT_OPTIONS = ["По умолчанию", "Сначала новые", "Сначала старые"];

type FilterProps = {
  tracks: TrackType[];
};

export function Filter({ tracks }: FilterProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilter = (filterName: string) => {
    setActiveFilter((prev) => (prev === filterName ? null : filterName));
  };

  const getUniqueAuthors = getUniqueValues(tracks, "author");
  const getUniqueGenre = getUniqueValues(tracks, "genre");

  const filters = [
    {
      title: "исполнителю",
      list: getUniqueAuthors,
    },
    {
      title: "году выпуска",
      list: SORT_OPTIONS,
    },
    {
      title: "жанру",
      list: getUniqueGenre,
    },
  ];

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      {filters.map((filter, index) => (
        <FilterItem
          key={index}
          title={filter.title}
          isActive={activeFilter === filter.title}
          handleFilter={handleFilter}
          list={filter.list}
        />
      ))}
    </div>
  );
}
