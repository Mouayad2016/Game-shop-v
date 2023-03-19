from rest_framework.decorators import api_view
from django.http import JsonResponse, HttpResponseRedirect
from django.shortcuts import redirect
from django.conf import settings
import paypalrestsdk
base_url = "https://api-m.sandbox.paypal.com"
@api_view(['POST'])
def paypal_payment(request):
    try:
        # Get payment details from the frontend request
        amount = request.data.get('amount')
        currency = request.data.get('currency')
        description = request.data.get('description')
        
        # Create a Payment object using the PayPal SDK
        paypalrestsdk.configure({
            'mode': 'sandbox', # Or 'live' for production
            'client_id': settings.PAYPAL_CLIENT_ID,
            'client_secret': settings.PAYPAL_SECRET
        })
        payment = paypalrestsdk.Payment({
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:3000/download",
                "cancel_url": "http://localhost:3000"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": description,
                        "sku": "item",
                        "price": amount,
                        "currency": currency,
                        "quantity": 1
                    }]
                },
                "amount": {
                    "total": amount,
                    "currency": currency
                },
                "description": description
            }]
        })

        # Create the payment on PayPal
        if payment.create():
            for link in payment.links:
                if link.method == "REDIRECT":
                    # Redirect to PayPal login page
                    redirect_url = str(link.href)
                    return JsonResponse({"link":redirect_url})

        # Handle payment creation failure
        return JsonResponse({'error': 'Payment creation failed'})

    except Exception as e:
        # Handle any exceptions that occur
        return JsonResponse({'error': str(e)})