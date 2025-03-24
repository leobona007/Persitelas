#!/bin/bash

# Exemplo de variáveis
REMOTE_USER="u301783910"
REMOTE_HOST="147.93.64.38"
REMOTE_PORT="65002" 
REMOTE_PATH="/home/u301783910/domains/persitelas.com.br/public_html"
LOCAL_BUILD_DIR="dist/public"

echo "Iniciando o build..."
npm run build || { echo "Build falhou"; exit 1; }

echo "Enviando arquivos via rsync..."
rsync -avz --delete -e "ssh -p $REMOTE_PORT" "$LOCAL_BUILD_DIR/" "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}" || { echo "Falha ao enviar arquivos"; exit 1; }

echo "Deploy concluído com sucesso!"
