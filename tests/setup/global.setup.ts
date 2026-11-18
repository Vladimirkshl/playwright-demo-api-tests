import test from '@playwright/test';
import { AuthUtils } from '@utils/auth';
import { FileSystemUtils } from '@utils/file-system-utils';
import { Utils } from '@utils/utils';

test.describe.configure({ mode: 'serial' });

test('Booker authentication', async ({ request }) => {
  const authFilePath = AuthUtils.getAuthFilePath();

  test.skip(
    !process.env.CI && FileSystemUtils.doesPathExist(authFilePath),
    'Skipping authentication (session is valid for 30 days)'
  );
  
  await AuthUtils.authenticate(request);
});

test('Setting up BUILD_ID, BOOKER_API_TOKEN', async ({}) => {
  process.env.BUILD_ID ||= `${process.env.CI ? 'CI_' : ''}${Utils.getCurrentDateTime()}`;
  
  const bookerAuthSession = JSON.parse(
    FileSystemUtils.readFile(AuthUtils.getAuthFilePath()) as string
  );
  process.env.API_TOKEN = bookerAuthSession.token;
});
