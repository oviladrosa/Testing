pipeline {
  agent {
      image 'node:6-alpine'
      args '-p 
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
