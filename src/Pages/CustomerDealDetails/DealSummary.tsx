import TextFieldInput from '../../layout/Components/FormComponents/TextFieldInput';
import { useState } from 'react';

function DealSummary() {
    const [voucher, setVoucher] = useState('');

    function handlerVoucherChange(e: React.ChangeEvent<HTMLInputElement>) {
        setVoucher(e.target.value);
    }
    function applyVoucher() {
        console.log('Voucher applied', voucher);
        // Implement the logic to apply voucher
    }
    return(
        <div className="cart-products-summary flex-1 bg-white h-[fit-content] rounded-[14px] shadow p-[20px] flex flex-col gap-[10px]">
            <div className='summary-header flex justify-between'>
                <span className='text-[grey] text-[16px]'>Total:</span>
                <span className='text-black text-[16px]'>$340</span>
            </div>
            <div className='summary-header flex justify-between'>
                <span className='text-[grey] text-[16px]'>Shipping:</span>
                <span className='text-black text-[16px]'>-</span>
            </div>
            <div className='summary-header flex justify-between'>
                <span className='text-[grey] text-[16px]'>Tax:</span>
                <span className='text-black text-[16px]'>-</span>
            </div>
            <div className='summary-header flex justify-between'>
                <span className='text-[grey] text-[16px]'>Discount:</span>
                <span className='text-black text-[16px]'>-</span>
            </div>
            <hr className='my-[15px]'></hr>
            <span className='text-[30px]'>$340</span>
            <hr className='my-[15px]'></hr>
            <TextFieldInput name='voucher' label='Voucher' handler={handlerVoucherChange}/>
            <button
                className="text-[red] text-center w-full p-[8px] border border-[red] rounded-[8px] duration-300 hover:bg-[#ffe9eb] hover:border hover:border-officialRed"
                onClick={applyVoucher}
            >
                Apply Voucher
            </button>
        </div>
    )
}

export default DealSummary;