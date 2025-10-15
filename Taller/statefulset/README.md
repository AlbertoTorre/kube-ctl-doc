
kubectl get pvc # Ver los volúmenes persistentes por pod

kubectl exec -it mongo-db-0 -n t1-kube -- mongosh # conectame a un pods con namespace