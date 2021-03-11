pipeline {
  agent any
  tools {nodejs "latest"}
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/aniol-carbo/musea-api'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'node server.js'
      }
    }  
  }
}
