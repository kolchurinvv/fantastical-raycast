import {runAppleScript} from 'run-applescript';

export default async () => {
  await runAppleScript("tell application \"Fantastical\" \n parse sentence \"Wake up at 8am\" \n end tell");
};