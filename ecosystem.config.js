module.exports = {
  apps: [
    {
      name: '3101-espinoza-space-next',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3101', //running on port 3126
      cwd: './app',
      exec_mode: 'fork',
      watch: false
    }
  ]
}
