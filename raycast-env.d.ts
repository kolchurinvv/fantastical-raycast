/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `fan-add-event-editable` command */
  export type FanAddEventEditable = ExtensionPreferences & {}
  /** Preferences accessible in the `fan-add-reminder-editable` command */
  export type FanAddReminderEditable = ExtensionPreferences & {}
  /** Preferences accessible in the `fan-quick-add-reminder` command */
  export type FanQuickAddReminder = ExtensionPreferences & {}
  /** Preferences accessible in the `fan-quick-add-event` command */
  export type FanQuickAddEvent = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `fan-add-event-editable` command */
  export type FanAddEventEditable = {
  /** event */
  "add": string
}
  /** Arguments passed to the `fan-add-reminder-editable` command */
  export type FanAddReminderEditable = {
  /** reminder */
  "add": string
}
  /** Arguments passed to the `fan-quick-add-reminder` command */
  export type FanQuickAddReminder = {
  /** reminder */
  "add": string
}
  /** Arguments passed to the `fan-quick-add-event` command */
  export type FanQuickAddEvent = {
  /** reminder */
  "add": string
}
}


declare module "swift:*" {
  function run<T = unknown, U = any>(command: string, input?: U): Promise<T>;
  export default run;
	export class SwiftError extends Error {
    stderr: string;
    stdout: string;
  }
}
