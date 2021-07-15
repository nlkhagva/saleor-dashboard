/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GaduurPackageUstatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: GaduurFragment
// ====================================================

export interface GaduurFragment {
  __typename: "Gaduur";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  ustatus: GaduurPackageUstatus;
  startDate: any | null;
  endDate: any | null;
  receivedDate: any | null;
  trackingNumber: string | null;
  shippingType: string | null;
  netWeight: number | null;
  grossWeight: number | null;
  totalAmount: number | null;
}
