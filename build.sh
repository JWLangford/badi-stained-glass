yarn build

aws configure set aws_access_key_id ${AWS_KEY}
aws configure set aws_secret_access_key ${AWS_SECRET}
aws configure set default.region us-east-1
aws s3 sync --delete ./dist s3://${AWS_BUCKET}
aws cloudfront create-invalidation --distribution-id ${AWS_DISTRIBUTION} --paths "/*"