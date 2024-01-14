import React, { useState } from "react";
import styles from "../styles/activity.module.css";
import {
  SearchIcon,
  AddIcon,
  SortIcon,
  DetailsIcon,
  TreatmentIcon,
  WeightIcon,
  MatingIcon,
  PregnancyIcon,
  MilkingIcon,
  CloseIcon,
} from "../assets/icons/icons";

const Activity = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dropList, setDropList] = useState(false);
  return (
    <>
      <div className={styles.activity__header}>
        <h3>Activity</h3>
        <div className={styles.activity__header_icons}>
          <i
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className={styles.nav__search__icon}
          >
            {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
          </i>
          <i
            className={styles.nav__search__icon}
            onClick={() => setDropList(!dropList)}
          >
            <DetailsIcon />
            <ul
              className={
                dropList
                  ? `${styles.activity__form_drop_list} ${styles.activity__form_drop_list_active}`
                  : `${styles.activity__form_drop_list}`
              }
            >
              <li>create</li>
            </ul>
          </i>
        </div>
        <div
          className={
            isSearchOpen
              ? `${styles.activity__form}`
              : `${styles.activity__form}  ${styles.activity__form_hide}`
          }
        >
          <form>
            <input
              className={
                isSearchOpen && `${styles.activity__form_search_active}`
              }
              type="text"
              placeholder="Search activity"
            />
            <i className={styles.icon_search}>
              <SearchIcon />
            </i>
          </form>
          <button>
            Create
            <AddIcon />
          </button>
        </div>
      </div>

      <div className={styles.activity__table_container}>
        <table className={styles.activity__table}>
          <thead>
            <tr>
              <th>Index</th>
              <th>Activity</th>
              <th>
                Updated
                <i>
                  <SortIcon />
                </i>
              </th>
              <th>
                Used For
                <i>
                  <SortIcon />
                </i>
              </th>
              <th>
                Status
                <i>
                  <SortIcon />
                </i>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.activity__table_index_td}>1</td>
              <td className={styles.activity__table_activity_td}>
                <i>
                  <TreatmentIcon />
                </i>
                New Treatment
              </td>
              <td className={styles.activity__table_updated_td}>
                26 Jan, 2023
              </td>
              <td className={styles.activity__table_used_td}>20,230 times</td>
              <td className={styles.activity__table_status_td}>
                <span>Active</span>
              </td>
              <td className={styles.activity__table_action_td}>
                <i>
                  <DetailsIcon />
                </i>
              </td>
            </tr>
            <tr>
              <td className={styles.activity__table_index_td}>2</td>
              <td className={styles.activity__table_activity_td}>
                <i>
                  <WeightIcon />
                </i>
                Weight Measurement
              </td>
              <td className={styles.activity__table_updated_td}>
                26 Jan, 2023
              </td>
              <td className={styles.activity__table_used_td}>20,230 times</td>
              <td className={styles.activity__table_status_td}>
                <span>Active</span>
              </td>
              <td className={styles.activity__table_action_td}>
                <i>
                  <DetailsIcon />
                </i>
              </td>
            </tr>
            <tr>
              <td className={styles.activity__table_index_td}>3</td>
              <td className={styles.activity__table_activity_td}>
                <i>
                  <MatingIcon />
                </i>
                Mating Status
              </td>
              <td className={styles.activity__table_updated_td}>
                26 Jan, 2023
              </td>
              <td className={styles.activity__table_used_td}>20,230 times</td>
              <td className={styles.activity__table_status_td}>
                <span>Active</span>
              </td>
              <td className={styles.activity__table_action_td}>
                <i>
                  <DetailsIcon />
                </i>
              </td>
            </tr>
            <tr>
              <td className={styles.activity__table_index_td}>4</td>
              <td className={styles.activity__table_activity_td}>
                <i className="icon_background">
                  <PregnancyIcon />
                </i>
                Pregnancy Check
              </td>
              <td className={styles.activity__table_updated_td}>
                26 Jan, 2023
              </td>
              <td className={styles.activity__table_used_td}>20,230 times</td>
              <td className={styles.activity__table_status_td}>
                <span>Active</span>
              </td>
              <td className={styles.activity__table_action_td}>
                <i>
                  <DetailsIcon />
                </i>
              </td>
            </tr>
            <tr>
              <td className={styles.activity__table_index_td}>5</td>
              <td className={styles.activity__table_activity_td}>
                <i className="icon_background">
                  <MilkingIcon />
                </i>
                Milking Status
              </td>
              <td className={styles.activity__table_updated_td}>
                26 Jan, 2023
              </td>
              <td className={styles.activity__table_used_td}>20,230 times</td>
              <td className={styles.activity__table_status_td}>
                <span>Active</span>
              </td>
              <td className={styles.activity__table_action_td}>
                <i>
                  <DetailsIcon />
                </i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Activity;
