import { APIRequestContext } from '@playwright/test';
import path from 'path';
import { FileSystemUtils } from './file-system-utils';
import { API_ENDPOINT } from '@constants/env';

export class AuthUtils {
  static getAuthFilePath(): string {
    return path.resolve(process.cwd(), '.auth', `${process.env.ENV}-booker.json`);
  }

  static async authenticate(request: APIRequestContext): Promise<void> {
    const response = await request.post(`${API_ENDPOINT}auth`, {
      data: {
        username: process.env.AUTH_USER_NAME,
        password: process.env.AUTH_PASSWORD,
      },
    });

    if (!response.ok()) {
      throw new Error(`Authentication failed: ${response.status()} ${await response.text()}`);
    };

    FileSystemUtils.writeFile(this.getAuthFilePath(), await response.text());
  }
}
