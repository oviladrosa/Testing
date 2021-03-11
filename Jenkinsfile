pipeline {
  agent {
    docker {
      image 'node:10-alpine'
    }
  }
  stages {
    stage('Build') {
      steps {
         echo 'Starting building test docker image'
         sh 'npm install'
      }
      post {
        success {
          echo 'Image successfully build'
        }
        failure {
          echo 'Failed to build image'
        }
      }
    }
    stage('Test') {
      echo 'Starting API tests'
    }
  }
}
