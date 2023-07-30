import fs from 'fs';
import path from 'path';

import { TSESLint } from '@typescript-eslint/utils';

import { pluginId } from './plugin-id';

const rootDir = path.resolve(__dirname, '../../src/rules/');

export type RuleInfo = {
  filePath: string;
  id: string;
  name: string;
  category?: string;
  description?: string;
  recommended?: false | 'error' | 'warn' | 'strict';
  deprecated: boolean;
  fixable: boolean;
  replacedBy: string[];
};

export type CategoryInfo = {
  id: string;
  rules: RuleInfo[];
};

export const rules: RuleInfo[] = fs
  .readdirSync(rootDir)
  .sort()
  .map((filename): RuleInfo => {
    const filePath = path.join(rootDir, filename);
    const name = filename.slice(0, -3);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { meta } = require(filePath) as unknown as {
      meta: TSESLint.RuleMetaData<string>;
    };

    return {
      filePath,
      id: `${pluginId}/${name}`,
      name,
      deprecated: Boolean(meta.deprecated),
      fixable: Boolean(meta.fixable),
      replacedBy: [],
      ...meta.docs,
    };
  });

export const categories: CategoryInfo[] = [
  'Possible Errors',
  'Best Practices',
  'Stylistic Issues',
].map(
  (id): CategoryInfo => ({
    id,
    rules: rules.filter((rule) => rule.category === id && !rule.deprecated),
  })
);
