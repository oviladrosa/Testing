pipeline {
  agent {
      image 'node:6-alpine'
  }
  stages {
    stage('Build') {
      steps {
         sh 'npm install'
         sh 'node server.js'
      }
    }  
  }
}
