# just-hook

> awesome react hooks

[![NPM](https://img.shields.io/npm/v/just-hook.svg)](https://www.npmjs.com/package/just-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save just-hook
```

## Usage

```tsx
import React from 'react'

import { useLocalStorage } from 'just-hook'
import 'just-hook/dist/index.css'

const App = () => {
  const [data, set, remove] = useLocalStorage('keys', 'antonioLopes')

  console.log(data, set, remove)
  return <h1>Antonio Lopes</h1>
}

export default App
```

## License

MIT © [Antonio Lopes](https://github.com/adilsonLopesDec)

# just-hook
