import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingCart, CreditCard, Sparkles, AlertCircle, Heart, ShieldCheck } from 'lucide-react';
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (courseId: string) => void;
  onClearCart: () => void;
}

export default function CartPopover({ isOpen, onClose, items, onRemoveItem, onClearCart }: CartPopoverProps) {
  const [promo, setPromo] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  // Subtotal Calculation
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const gstRate = 0.18; // 18% standard GST for educational software in India
  const discountAmount = subtotal * discountPercent;
  const taxableAmount = subtotal - discountAmount;
  const gstAmount = taxableAmount * gstRate;
  const totalAmount = taxableAmount + gstAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = promo.trim().toUpperCase();
    if (formatted === 'CCTNEW20') {
      setDiscountPercent(0.20);
      setPromoSuccess('Promo Code Applied: 20% Off Seat Registration!');
      setPromoError('');
    } else if (formatted === 'FREEFEST') {
      setDiscountPercent(0.15);
      setPromoSuccess('Promo Code Applied: 15% Seasonal Discount!');
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code. Try CCTNEW20 or FREEFEST');
      setPromoSuccess('');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setEnrollSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs"
            id="cart-backdrop"
          />

          {/* Drawer Wrapper */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full border-l border-slate-100"
              id="cart-drawer-container"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <ShoppingCart className="h-5.5 w-5.5 text-indigo-600" />
                    {items.length > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-rose-500 rounded-full text-[9px] font-black text-white flex items-center justify-center animate-pulse">
                        {items.length}
                      </span>
                    )}
                  </div>
                  <h3 className="text-md font-bold text-slate-800">CCT Enrollment Cart</h3>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
                  id="cart-close-btn"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {enrollSuccess ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="py-10 text-center"
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-4">
                      <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Registration Complete!</h4>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
                      An email containing access keys and standard receipt credentials is being routed to your profile.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-4 text-left text-xs space-y-2 border border-slate-100 mb-6 max-w-sm mx-auto">
                      <div className="border-b border-slate-200 pb-1.5 font-bold uppercase tracking-wider text-slate-700">Digital Order Receipt</div>
                      {items.map((item) => (
                        <div key={item.courseId} className="flex justify-between">
                          <span className="text-slate-600">{item.title}</span>
                          <span className="font-semibold text-slate-800">₹{item.price.toLocaleString('en-IN')}</span>
                        </div>
                      ))}
                      {discountAmount > 0 && (
                        <div className="flex justify-between text-emerald-600">
                          <span>Promo Discount ({discountPercent * 100}%):</span>
                          <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                      <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-slate-900 text-sm">
                        <span>Paid Total:</span>
                        <span>₹{totalAmount.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onClearCart();
                        setEnrollSuccess(false);
                        onClose();
                      }}
                      className="cursor-pointer bg-indigo-600 text-white rounded-lg px-6 py-2.5 text-xs font-bold hover:bg-indigo-700 transition"
                      id="close-success-cart-btn"
                    >
                      Browse More Batches
                    </button>
                  </motion.div>
                ) : items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center py-20 text-center">
                    <div className="h-16 w-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 mb-4 border border-dashed border-slate-200">
                      <ShoppingCart className="h-8 w-8 text-slate-300" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 mb-1">Your Cart is Empty</h4>
                    <p className="text-xs text-slate-500 max-w-[240px] leading-relaxed">
                      Explore our high-demand batches or programs and select 'Enroll Now' or 'Add to Cart' to start certification.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-500 font-medium">Selected courses ready for enrollment slot reserving ({items.length}):</p>
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div
                          key={item.courseId}
                          className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:border-slate-200 transition bg-slate-50/50"
                        >
                          <div className="flex-1 pr-3">
                            <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{item.title}</h4>
                            <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mt-0.5">Seat reserved: 1 Spot</p>
                            <span className="text-xs font-bold text-slate-900 block mt-1">₹{item.price.toLocaleString('en-IN')}</span>
                          </div>
                          <button
                            onClick={() => onRemoveItem(item.courseId)}
                            className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition"
                            title="Remove Course Seat"
                            id={`remove-cart-item-${item.courseId}`}
                          >
                            <Trash2 className="h-4.5 w-4.5" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Promote Section */}
                    <div className="border-t border-b border-slate-100 py-4 mt-6">
                      <form onSubmit={handleApplyPromo} className="flex gap-2">
                        <input
                          type="text"
                          value={promo}
                          onChange={(e) => setPromo(e.target.value)}
                          placeholder="PROMO CODE (e.g. CCTNEW20)"
                          className="flex-1 text-xs border border-slate-200 rounded-lg px-3 py-2 uppercase font-medium focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                        />
                        <button
                          type="submit"
                          className="cursor-pointer border border-indigo-600 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-3 py-2 rounded-lg text-xs font-bold transition shadow-xs"
                          id="apply-coupon-btn"
                        >
                          Apply
                        </button>
                      </form>
                      {promoSuccess && (
                        <p className="text-[10px] text-emerald-600 font-bold mt-1.5 flex items-center gap-1">
                          <Sparkles className="h-3 w-3" /> {promoSuccess}
                        </p>
                      )}
                      {promoError && (
                        <p className="text-[10px] text-rose-500 font-medium mt-1.5 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {promoError}
                        </p>
                      )}
                      <div className="mt-2 text-[10px] text-slate-400 font-semibold">
                        💡 Use code <span className="font-bold text-slate-500">CCTNEW20</span> for 20% off seat reservations!
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Billing */}
              {items.length > 0 && !enrollSuccess && (
                <div className="border-t border-slate-100 bg-slate-50 p-6 space-y-4">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Seat Total Subtotal:</span>
                      <span>₹{subtotal.toLocaleString('en-IN')}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-600">
                        <span>Discount Coupon ({discountPercent * 100}%):</span>
                        <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-600">
                      <span>Taxable Education GST (18%):</span>
                      <span>₹{gstAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2 font-black text-slate-900 text-sm">
                      <span>Total Amount Payable:</span>
                      <span>₹{totalAmount.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 leading-snug">
                    <svg className="h-3.5 w-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Instant checkout is secure. Tax Invoice with SAC Code will be routed back automatically.</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-3 text-xs font-semibold shadow-lg shadow-indigo-500/15 flex items-center justify-center gap-2 transition"
                    id="checkout-cart-btn"
                  >
                    {isCheckingOut ? (
                      <>
                        <div className="h-4.5 w-4.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Routing Secure Transfer...
                      </>
                    ) : (
                      <>
                        <CreditCard className="h-4 w-4" />
                        Complete Instant Enrollment
                      </>
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
