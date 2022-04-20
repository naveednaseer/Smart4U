from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.serializers import InstallationSerializer
from base.models import Installation



@api_view(['POST'])
def createInstallation(request):
        data = request.data
        print(data)
        installation = Installation.objects.create(
            date=data['date'],
            name=data['name'],
            email=data['email'],
            number=data['number'],
            address=data['address'],
            product=data['product'],
            time=data['time'],
        )
        serializer = InstallationSerializer(installation, many=False)
        return Response(serializer.data) 





# {
#     "name": "api test",
#     "date": "22-02-12",
#     "email": "api@email.com",
#     "number": "9988766544",
#     "address": "12 street",
#     "product": "camera",
#     "time": "between 12 pm and 2 pm"
# }