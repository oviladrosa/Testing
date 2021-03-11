pipeline {
  agent {
    docker {
      image 'node:10-alpine'
    }
  }
  enviroment {
    DATABASE_URL = 'mongodb+srv://admin:admin@museadb.091dp.mongodb.net/museaDB?retryWrites=true&w=majority'
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
