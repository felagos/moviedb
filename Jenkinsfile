pipeline {
  agent any
  tools {
    nodejs 'node-14'
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm i'
      }
    }
    stage('Run tests') {
      steps {
        sh 'npm test'
      }
    }
	stage('Run E2E ests') {
      steps {
        sh 'npm run e2e:ci'
      }
    }
  }
}
