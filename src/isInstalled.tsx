import { getApplications } from '@raycast/api';

export async function isInstalled() {
    const isInstalled = (await getApplications()).find(app => app.name === 'Fantastical') != undefined ? true : false;
    return isInstalled;
}

export {}
