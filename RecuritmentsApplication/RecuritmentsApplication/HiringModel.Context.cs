﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace RecuritmentsApplication
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class RecuritmentsDBEntities : DbContext
    {
        public RecuritmentsDBEntities()
            : base("name=RecuritmentsDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Candidate> Candidates { get; set; }
        public virtual DbSet<Candidate_Companies> Candidate_Companies { get; set; }
        public virtual DbSet<Candidate_Skills> Candidate_Skills { get; set; }
        public virtual DbSet<Company> Companies { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Skill> Skills { get; set; }
        public virtual DbSet<Status> Status { get; set; }
    }
}
