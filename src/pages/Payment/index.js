import React from 'react';
import PaymentBill from '~/components/PaymentBill';
import PaymentForm from '~/components/PaymentForm';
import { FlexLayout } from '~/layouts';

function Payment() {
    return (
        <FlexLayout reverse aside={<PaymentBill />}>
            <PaymentForm />
        </FlexLayout>
    );
}

export default Payment;
