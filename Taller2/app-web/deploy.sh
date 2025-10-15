#!/bin/bash

# 1. Aplicar secret y MySQL
kubectl apply -f ./specifications/secret.yml
kubectl apply -f ./specifications/mysql-deployment.yml
kubectl apply -f ./specifications/mysql-service.yml

# 2. Esperar a que MySQL esté listo
echo "Esperando a que MySQL esté listo..."
kubectl wait --for=condition=ready pod -l app=mysql --timeout=120s

# 3. Aplicar la app
kubectl apply -f ./specifications/app-deployment.yml
kubectl apply -f ./specifications/app-service.yml

echo "✅ Despliegue completado."