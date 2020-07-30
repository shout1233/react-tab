This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## IoT

### Azure IoT Central

### Azure IoT Hub

## 빅데이터 분석 솔루션

### Azure Synapse Analytics

### Azure HDInsight

### Azure Machine Learning service (코드기반의 머신러닝서비스)

### Azure Machine Learning Studio (GUI 기반 손쉽게 생성/배포)

## 서버리스

### Azure Functions

(요청이 오면 Event 에 의해 트리거된 코드가 실행)

### Azure Logic Apps

### Azure Event Grid

## DevOps

### Azure DevOps services

### Azure DevTest Labs

개발한 내용을 신속하게 테스트를 해볼 수 있는 VM 제공 (비용 절감)

## Azure 관리도구

### Azure 포탈 (GUI)

### Azure PowerShell / Azure CLI

### Azure Cloud Shell (클라이언트에 CLI 설치가 어려울 경우, 브라우저 형태로 제공되는 CLI)

### Azure mobile app

### Azure REST API

### Azure Advisor

배포된 Azure 리소스를 Best Practice 기반으로 분석하여 개선가능한 내용 제공 (무료)

# 모듈3

### 심층방어

물리적보안 -> 신원 및 액세스 -> 경계 -> 네트워크 -> 계산 -> 응용프로그램 -> 데이터

### 공동책임

서비스타입에 따라 다르지만 벤더와 고객의 보안 사고에 대한 공동 책임

### 방화벽

네트워크 리소스를 보호가기 위해 IP 주소를 기반으로 서버 액세스를 허용/거부하도록 하는 PASS 형태의 서비스
NAT rule collection
Network rule collection (RDP, FTP 등)
Application rule (인바운드X, 아웃바운드 레벨)

Azure Distributed Denial of Service (DDos 보호, 베이직은 기본적으로 제공)

### 네트워크 보안그룹 (NSG)

Azure 방화벽과의 차이점은? (IP기반의 인바운드/아웃바운드 필터링)
방화벽은 제일 앞 단에서 검열을 하는 정문 (여러 개의 구독을 한번에 Cover 가능)
NSG 는 방화벽 이후의 작은 문

## 인증 및 권한

인증(Authentication)
인가, 권한부여(Authorization)

## Azure Active Directory (AAD)의

Azure 의 클라우드 기반 신원 확인 및 접근관리 서비스
윈도우의 AD 와 무관하니 헷갈리지 말 것

## Azure Security Center

감지와 평가 진단까지
안정화와 종료는 사용자가 직접

## Azure Key Vault

## Azure Information Protection (AIP)

레이블을 적용하여 문서나 메일을 분류하고 보호

# Azure 거버넌스

## 정책

Azure 리소스에 대한 규칙을 적용하기 위해 정책을 사용하여 회사 표준 및 SLA 준수 가능
정책 정의 생성 -> 리소스에 정책 할당 -> 평가 및 검토

## 정책 이니셔티브

정책 하나 하나를 리소스 하나 하나에 할당하기는 어려우므로 정책들의 묶음(이니셔티브) 을 만들어 리소스에 적용

## RBAC 역할 기반 액세스 제어

Azure 리소스에 대한 세분화된 액세스 관리 제어 기능

## 잠금 (Resource locks)

실수로 삭제하거나 수정하지 않도록 리소스를 보호

# Module4

## 비용에 영향을 미치는 요인

1. Resourece 유형
2. 계약 형태 (기업, 웹 Direct, CSP)
3. 로케이션 (리전에 따라 동일한 리소스이더라도 비용이 달라질 수 있다.)

## 청구 영역

대역폭 : Azure 데이터 센터로 들어가는 데이터는 무료이지만 아웃바운드는 청구된다.
