let BASE_URL = ''
const TIME_OUT = 30000

const mode = process.env.NODE_ENV

if (mode === 'development') {
  // 开发环境
  BASE_URL = 'http://localhost:8000/'
} else if (mode === 'test') {
  // 测试环境
  BASE_URL = 'http://localhost:8000/'
} else if (mode === 'production') {
  // 生产环境
  BASE_URL = 'http://localhost:8000/'
}

export { BASE_URL, TIME_OUT }
