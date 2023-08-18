# Wacathon 컴소생 팀 Frontend Repository

# TIP

``` bash
npm install -g @openapitools/openapi-generator-cli

# 검색
openapi-generator-cli generate \
  -g javascript \
  -i http://43.202.59.248:8080/v2/api-docs?group=%EA%B2%80%EC%83%89 \
  -o ./src/__codegen__/openapi/search

cd ./src/__codegen__/openapi/search
npm run build
cd -

# 인증
openapi-generator-cli generate \
  -g javascript \
  -i http://43.202.59.248:8080/v2/api-docs?group=%EC%9D%B8%EC%A6%9D \
  -o ./src/__codegen__/openapi/auth

# 태그
openapi-generator-cli generate \
  -g javascript \
  -i http://43.202.59.248:8080/v2/api-docs?group=%ED%83%9C%EA%B7%B8 \
  -o ./src/__codegen__/openapi/tag

# 평가
openapi-generator-cli generate \
  -g javascript \
  -i http://43.202.59.248:8080/v2/api-docs?group=%ED%83%9C%EA%B7%B8 \
  -o ./src/__codegen__/openapi/indicator

# 피드백
openapi-generator-cli generate \
  -g javascript \
  -i http://43.202.59.248:8080/v2/api-docs?group=%ED%94%BC%EB%93%9C%EB%B0%B1 \
  -o ./src/__codegen__/openapi/feedback

# 회원
openapi-generator-cli generate \
  -g javascript \
  -i http://43.202.59.248:8080/v2/api-docs?group=%ED%9A%8C%EC%9B%90 \
  -o ./src/__codegen__/openapi/member \
  --additional-properties=usePromises=true

```
