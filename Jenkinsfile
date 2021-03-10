pipeline {
  agent any
    
  tools {nodejs "node"}
    
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
    
            
    stage('Test') {
      steps {
      }
    }
  }
}
