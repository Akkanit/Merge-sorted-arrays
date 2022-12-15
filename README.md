## Setup dependencies
Install node modules
```bash
$ npm install
```
The above command should install all required dependencies. 
But in case some error occurs, the following commands should be able to troubleshoot the troubles.
```bash
# install jest
npm install --save-dev jest
# install jest type
npm i --save-dev @types/jest
# install the package that makes jest works with typescript
npm install --save-dev ts-jest

npm install -g typescript
npm install -g ts-node

```
## Execute code
File index.ts that call function merge(int[] collection1, int[] collection2): int[] can be executed by the following command
```bash
$ npm start
```
Or the following command
```bash
$ ts-node index.ts
```

## Unit test
The unit test is performed with Jest.
The cases can be investigated in merge.test.ts
It can be run by the following command.

```bash
$ npm test
```

