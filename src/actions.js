import axios from "axios";
import get from "lodash/get";

export const SET_NOTIFICATIONS = "SET_NOTIFICATIONS";

const LAST_CHANGELOG_DATE = "LAST_CHANGELOG_DATE";

// Check user's localStorage for the last date they viewed the changelog
export function getLastChangeSeen() {
  return localStorage.getItem(LAST_CHANGELOG_DATE);
}

// Sets user's localStorage with date of last changelog update
export function setLastChangeSeen(dateString) {
  return localStorage.setItem(LAST_CHANGELOG_DATE, dateString);
}

// sets notifications to 0 in state
export function clearNotifications() {
  return dispatch => dispatch({ type: SET_NOTIFICATIONS, value: 0 });
}

export function getChangelogHTML() {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get(
        "https://api.github.com/gists/11af66c06ead3f46d205bd432aab0358"
      );
      // get content string from gist response
      const content = get(
        res,
        "data.files['ps-notifier-changelog.md'].content",
        ""
      );

      // get array of dates from changelog
      const changelogDates = getDates(content);
      // local storage date of last change user has seen
      const lastChangeSeen = getLastChangeSeen();

      const notifications = lastChangeSeen
        ? changelogDates.indexOf(lastChangeSeen)
        : changelogDates.length;

      dispatch({ type: SET_NOTIFICATIONS, value: notifications });

      // always set seen date to most recent update
      setLastChangeSeen(changelogDates[0]);
    } catch (error) {
      console.error(error);
    }
  };
}

// takes in the changelog markdown text, and returns array of dates
function getDates(markdown) {
  const regex = /\d{4}-\d{2}-\d{2}/g;
  return markdown.match(regex);
}
